import React, { useState } from 'react';
import { Calendar, Clock, Dumbbell, Smile } from 'lucide-react';
import './WorkoutLogger.css';

const WorkoutLogger = () => {
  const [workoutData, setWorkoutData] = useState({
    date: new Date().toISOString().split('T')[0],
    duration: 60,
    exercises: [],
    energyLevel: 3,
    mood: 'good'
  });

  const [currentExercise, setCurrentExercise] = useState({
    name: '',
    sets: 3,
    reps: 10,
    weight: 0
  });

  const addExercise = () => {
    if (currentExercise.name) {
      setWorkoutData(prev => ({
        ...prev,
        exercises: [...prev.exercises, currentExercise]
      }));
      setCurrentExercise({
        name: '',
        sets: 3,
        reps: 10,
        weight: 0
      });
    }
  };

  return (
    <div className="workout-logger">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">
            <Dumbbell className="icon" />
            Log Your Workout
          </h2>
        </div>
        <div className="card-content">
          <div className="form-group">
            <div className="input-group">
              <Calendar className="icon" />
              <input
                type="date"
                value={workoutData.date}
                onChange={e => setWorkoutData(prev => ({...prev, date: e.target.value}))}
              />
            </div>

            <div className="input-group">
              <Clock className="icon" />
              <input
                type="number"
                value={workoutData.duration}
                onChange={e => setWorkoutData(prev => ({...prev, duration: parseInt(e.target.value)}))}
              />
              <span>minutes</span>
            </div>

            <div className="exercises-section">
              <h3>Exercises</h3>
              {workoutData.exercises.map((exercise, index) => (
                <div key={index} className="exercise-item">
                  <span className="exercise-name">{exercise.name}</span>
                  <span>{exercise.sets} sets</span>
                  <span>{exercise.reps} reps</span>
                  <span>{exercise.weight} kg</span>
                </div>
              ))}

              <div className="exercise-input-group">
                <input
                  placeholder="Exercise name"
                  value={currentExercise.name}
                  onChange={e => setCurrentExercise(prev => ({...prev, name: e.target.value}))}
                />
                <input
                  type="number"
                  placeholder="Sets"
                  value={currentExercise.sets}
                  onChange={e => setCurrentExercise(prev => ({...prev, sets: parseInt(e.target.value)}))}
                />
                <input
                  type="number"
                  placeholder="Reps"
                  value={currentExercise.reps}
                  onChange={e => setCurrentExercise(prev => ({...prev, reps: parseInt(e.target.value)}))}
                />
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={currentExercise.weight}
                  onChange={e => setCurrentExercise(prev => ({...prev, weight: parseInt(e.target.value)}))}
                />
                <button onClick={addExercise} className="add-button">Add</button>
              </div>
            </div>

            <div className="input-group">
              <Smile className="icon" />
              <select
                value={workoutData.mood}
                onChange={e => setWorkoutData(prev => ({...prev, mood: e.target.value}))}
              >
                <option value="great">Great</option>
                <option value="good">Good</option>
                <option value="okay">Okay</option>
                <option value="tired">Tired</option>
              </select>
            </div>

            <button class="btn cube cube-hover" type="button">
  <div class="bg-top">
    <div class="bg-inner"></div>
  </div>
  <div class="bg-right">
    <div class="bg-inner"></div>
  </div>
  <div class="bg">
    <div class="bg-inner"></div>
  </div>
  <div class="text">Save Workout</div>
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutLogger;
