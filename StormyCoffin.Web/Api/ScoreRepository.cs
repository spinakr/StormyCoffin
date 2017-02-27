using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;

namespace StormyCoffin.Web.Api
{
    public static class ScoreRepository
    {
        public static Dictionary<int, List<string>> UserScores { get; set; } = new Dictionary<int, List<string>>()
        {
            {1, new List<string> { "45", "67" } },
            {4, new List<string> { "10", "26" } },
            {9, new List<string> { "90", "10" } },
        };
    }
}