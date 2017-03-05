using System;
using System.Collections.Generic;

namespace StormyCoffin.Api.Api
{
    public static class ScoreRepository
    {
        public static List<UserSummary> Users { get; set; } = new List<UserSummary>
        {
            new UserSummary
            {
                UserId = Guid.NewGuid(),
                UserName = "ak",
                Scores = new List<double> { 20, 30, 40 }
            },
            new UserSummary
            {
                UserId = Guid.NewGuid(),
                UserName = "bjarne",
                Scores = new List<double> { 10, 50, 15 }
            },
            new UserSummary
            {
                UserId = Guid.NewGuid(),
                UserName = "spinn",
                Scores = new List<double> { 5, 12, 11 }
            }
        };
    }

    public class UserSummary
    {
        public Guid UserId { get; set; }
        public string UserName { get; set; }
        public List<double> Scores { get; set; }
    }
}