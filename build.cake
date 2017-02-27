#tool nuget:?package=NUnit.ConsoleRunner&version=3.4.0
#addin "Cake.Npm"
#tool "nuget:?package=OctopusTools"

var target = Argument("target", "Default");

var buildDir = Directory("./src/StormyCoffin.Api/bin");
var packDir = Directory("./octopacked");

Task("Clean")
    .Does(() =>
{
    CleanDirectory(buildDir);
    CleanDirectory(packDir);
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
    MSBuild("./src/StormyCoffin.Api/StormyCoffin.Api.csproj");
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

Task("Pack-Package")
    .IsDependentOn("Build-Web-Api")
    .IsDependentOn("Npm-Build")
    .Does(() => 
{
    OctoPack("StormyCoffin" , new OctopusPackSettings
        {
            Format = OctopusPackFormat.NuPkg, // or OctopusPackFormat.Zip
            Version = "0.0.0.1",
            OutFolder = "./octopacked/",
            BasePath = "./src/",
            Author = "Anders Kofoed",
            Description = "Stormy Coffin web application",
            Overwrite = true,
        });
});

Task("Push-Package")
    .IsDependentOn("Pack-Package")
    .Does(() => 
{
    
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
