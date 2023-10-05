package com.example.fitness.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String exercise;
    private int durationMinutes;
    private int caloriesBurned;

    // Constructors (you can generate these using your IDE or create them manually)

    public Workout() {
    }

    public Workout(String exercise, int durationMinutes, int caloriesBurned) {
        this.exercise = exercise;
        this.durationMinutes = durationMinutes;
        this.caloriesBurned = caloriesBurned;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public int getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(int durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public int getCaloriesBurned() {
        return caloriesBurned;
    }

    public void setCaloriesBurned(int caloriesBurned) {
        this.caloriesBurned = caloriesBurned;
    }

    // toString method for debugging

    @Override
    public String toString() {
        return "Workout{" +
                "id=" + id +
                ", exercise='" + exercise + '\'' +
                ", durationMinutes=" + durationMinutes +
                ", caloriesBurned=" + caloriesBurned +
                '}';
    }
}
