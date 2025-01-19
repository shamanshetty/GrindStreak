import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Trophy, Target, ArrowUp } from 'lucide-react';
import './ProgressDashboard.css';

const ProgressDashboard = () => {
  // Sample data - in reality, this would come from your backend
  const workoutData = [
    { week: 'Week 1', workouts: 2, strength: 100 },
    { week: 'Week 2', workouts: 3, strength: 110 },
    { week: 'Week 3', workouts: 3, strength: 115 },
    { week: 'Week 4', workouts: 4, strength: 125 }
  ];

  const achievements = [
    { id: 1, name: 'First Workout', icon: '🎯', achieved: true },
    { id: 2, name: 'Week Streak', icon: '🔥', achieved: true },
    { id: 3, name: 'Month Milestone', icon: '🏆', achieved: false }
  ];

  return (
    <div className="progress-dashboard">
      <div className="charts-grid">
        <div className="chart-card">
          <div className="card-header">
            <h2 className="card-title">
              <Calendar className="icon" />
              Workout Frequency
            </h2>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="workouts" 
                  stroke="#2196F3" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <div className="card-header">
            <h2 className="card-title">
              <ArrowUp className="icon" />
              Strength Progress
            </h2>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="strength" 
                  stroke="#4CAF50" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="achievements-card">
        <div className="card-header">
          <h2 className="card-title">
            <Trophy className="icon" />
            Achievements
          </h2>
        </div>
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={`achievement-item ${achievement.achieved ? 'achieved' : ''}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-name">{achievement.name}</div>
              <div className="achievement-status">
                {achievement.achieved ? 'Completed' : 'In Progress'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
