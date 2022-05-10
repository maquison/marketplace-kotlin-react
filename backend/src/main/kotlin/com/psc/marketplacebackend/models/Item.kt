package com.psc.marketplacebackend.models

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotBlank

@Entity
data class Item(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @get: NotBlank
    @Column
    val name: String = "",

    @get: NotBlank
    @Column
    val description: String = "",

    @get: NotBlank
    @Column
    val category: String = "",

    @get: NotBlank
    @Column
    val image: String = "",

    @get: NotBlank
    @Column
    val currentPrice: Double = 0.0,

    @get: NotBlank
    @Column
    val previousPrice: Double = 0.0,

    @get: NotBlank
    @Column
    val reviews: Int = 0,

    @get: NotBlank
    @Column
    val classification: Double = 0.0
)
