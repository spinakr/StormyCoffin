using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StormyCoffin.Web.Api
{
    public static class ScoreRepository
    {
        public static Dictionary<int, List<string>> UserScores { get; set; } = new Dictionary<int, List<string>>();
    }
}