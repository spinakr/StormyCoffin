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
        public Dictionary<int, string> UserScore()
        {
            var highScoreList = ScoreRepository.UserScores
                .ToDictionary(uid => uid.Key, uid => uid.Value.Max())
                .OrderByDescending(x => x.Value)
                .Take(5)
                .ToDictionary(x => x.Key, x => x.Value);
            return highScoreList;
        }

        [Route("userScore/{playerId}")]
        [HttpPatch]
        public void UserScore(int playerId, [FromBody] GameScore score)
        {
            if (!ScoreRepository.UserScores.ContainsKey(playerId))
            {
                ScoreRepository.UserScores[playerId] = new List<string>();
            }
            ScoreRepository.UserScores[playerId].Add(score.PlayerScore.ToString());
        }
    }

    public class GameScore
    {
        public double PlayerScore { get; set; }
        public double TotalTimeSpentRecalling { get; set; }
        public int GameLevel { get; set; }
    }
}
