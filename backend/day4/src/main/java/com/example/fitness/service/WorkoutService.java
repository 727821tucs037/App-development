package com.example.fitness.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fitness.model.Workout;
import com.example.fitness.repository.WorkoutRepository;

import java.util.List;
import java.util.Optional;

@Service
public class WorkoutService {
    private final WorkoutRepository workoutRepository;

    @Autowired
    public WorkoutService(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public Workout getWorkoutById(Long id) {
        Optional<Workout> optionalWorkout = workoutRepository.findById(id);
        return optionalWorkout.orElse(null);
    }

    public Workout createWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public Workout updateWorkout(Long id, Workout workout) {
        if (workoutRepository.existsById(id)) {
            workout.setId(id);
            return workoutRepository.save(workout);
        } else {
            return null; // Workout not found
        }
    }

    public boolean deleteWorkout(Long id) {
        if (workoutRepository.existsById(id)) {
            workoutRepository.deleteById(id);
            return true;
        } else {
            return false; // Workout not found
        }
    }
}
