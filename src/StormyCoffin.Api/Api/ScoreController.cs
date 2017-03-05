using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace StormyCoffin.Api.Api
{
    [RoutePrefix("score")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ScoreController : ApiController
    {
        [Route("userScore")]
        [HttpGet]
        public List<UserSummary> UserScore()
        {
            var highScoreList = ScoreRepository.Users
                .OrderByDescending(x => x.Scores.Max())
                .Take(5).ToList();
            return highScoreList;
        }

        [Route("userScore/{userName}")]
        [HttpPatch]
        public void UserScore(string userName, [FromBody] GameScore score)
        {
            if (!ScoreRepository.Users.Exists(u => u.UserName == userName))
            {
                ScoreRepository.Users.Add(new UserSummary { UserId = Guid.NewGuid(), UserName = userName, Scores = new List<double>()});
            }

            ScoreRepository.Users
                    .First(u => u.UserName == userName)
                    .Scores.Add(score.PlayerScore);
        }
    }

    public class GameScore
    {
        public double PlayerScore { get; set; }
        public double TotalTimeSpentRecalling { get; set; }
        public int GameLevel { get; set; }
    }
}
