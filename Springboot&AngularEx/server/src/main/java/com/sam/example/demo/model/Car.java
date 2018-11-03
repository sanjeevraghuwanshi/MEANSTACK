package com.sam.example.demo.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class Car {
    @Id
    @GeneratedValue
    private Long id;

    private @NonNull
    String name;
}
