#tool nuget:?package=NUnit.ConsoleRunner&version=3.4.0
#addin "Cake.Npm"
#tool "nuget:?package=OctopusTools"
#addin "Cake.FileHelpers"

var target = Argument("target", "Default");

var buildDir = Directory("./src/StormyCoffin.Api/bin");
var buildWebDir = Directory("./src/StormyCoffin.Web/dist");
var packDir = Directory("./octopacked");


var buildCounter = Argument<int>("BuildCounter", 10);
var buildingBranch = Argument<string>("BuildingBranch", "master");

var packageVersion = "1.0.1." + buildCounter;

Task("Clean")
    .Does(() =>
{
    CleanDirectory(buildDir);
    CleanDirectory(packDir);
    CleanDirectory(buildWebDir);
});

Task("Restore-NuGet-Packages")
    .IsDependentOn("Clean")
    .Does(() =>
{
    NuGetRestore("./src/StormyCoffin.sln");
});

Task("Build-Web-Api")
    .IsDependentOn("Restore-NuGet-Packages")
    .Does(() =>
{
    // Use MSBuild
    MSBuild("./src/StormyCoffin.Api/StormyCoffin.Api.csproj", new MSBuildSettings()
        .WithProperty("OutDir", "./published/")
        .WithProperty("DeployOnBuild", "true"));
        //.WithProperty("PublishProfile", "file"));
});

Task("Npm-Install")
    .Does(() => 
{
    Npm.FromPath("./src/StormyCoffin.Web/").Install();
});

Task("Npm-Build")
    .IsDependentOn("Npm-Install")
    .Does(() => 
{
    Npm.FromPath("./src/StormyCoffin.Web/").RunScript("build");
});

Task("Pack-Api")
    .IsDependentOn("Build-Web-Api")
    .Does(() => 
{
    var fullApi = new System.IO.FileInfo("./src/Stormycoffin.Api/published/_PublishedWebsites/StormyCoffin.Api/").FullName;
    OctoPack("StormyCoffin.Api" , new OctopusPackSettings
        {
            Format = OctopusPackFormat.NuPkg, // or OctopusPackFormat.Zip
            Version = packageVersion,
            OutFolder = "./octopacked/",
            BasePath = fullApi,
            Author = "Anders Kofoed",
            Description = "Stormy Coffin web api",
            Overwrite = true,
        });
});

Task("Transform-app-version")
    .IsDependentOn("Npm-Build")
    .Does(() => 
{
    CopyFile("src/StormyCoffin.Web/index.html", "src/StormyCoffin.Web/dist/index.html");
    
    ReplaceTextInFiles("src/StormyCoffin.Web/dist/index.html", "dist/app-bundle.js", "app-bundle.js=" + packageVersion);

    MoveFile("./src/StormyCoffin.Web/dist/app-bundle.js", "./src/StormyCoffin.Web/dist/app-bundle.js=" + packageVersion);
    
});

Task("Pack-Web")
    .IsDependentOn("Transform-app-version")
    .Does(() => 
{
    var fullWeb = new System.IO.FileInfo("./src/Stormycoffin.Web/dist/").FullName;
    
    OctoPack("StormyCoffin.Web" , new OctopusPackSettings
        {
            Format = OctopusPackFormat.NuPkg, // or OctopusPackFormat.Zip
            Version = packageVersion,
            OutFolder = "./octopacked/",
            BasePath = "./src/",
            Author = "Anders Kofoed",
            Include = new [] 
            {
                fullWeb + "*"
            },
            Description = "Stormy Coffin web application",
            Overwrite = true,
        });
});

Task("Push-Package")
    .IsDependentOn("Pack-Api")
    .IsDependentOn("Pack-Web")
    .Does(() => 
{
    var packagePath = new System.IO.FileInfo("./octopacked/").FullName;
    OctoPush("http://demo.sp1nakr.com:8081/", "API-0OUGMAR9J8GW4TDNFB7D4BKRY", 
        new FilePath("./octopacked/StormyCoffin.Web." + packageVersion + ".nupkg"), 
        new OctopusPushSettings());
    OctoPush("http://demo.sp1nakr.com:8081/", "API-0OUGMAR9J8GW4TDNFB7D4BKRY", 
        new FilePath("./octopacked/StormyCoffin.Api." + packageVersion + ".nupkg"), 
        new OctopusPushSettings());
});




//////////////////////////////////////////////////////////////////////
// TASK TARGETS
//////////////////////////////////////////////////////////////////////

Task("Default")
    .IsDependentOn("Push-Package");

//////////////////////////////////////////////////////////////////////
// EXECUTION
//////////////////////////////////////////////////////////////////////

RunTarget(target);
