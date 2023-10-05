package com.example.fitness.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.fitness.model.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
}
