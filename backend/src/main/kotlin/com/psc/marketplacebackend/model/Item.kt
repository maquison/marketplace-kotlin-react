package com.psc.marketplacebackend.model

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
    val name: String = "",

    @get: NotBlank
    val description: String = "",

    @get: NotBlank
    val currentPrice: Double = 0.0,

    @get: NotBlank
    val previousPrice: Double = 0.0,

    @get: NotBlank
    val reviews: Int = 0,

    @get: NotBlank
    val classification: Double = 0.0
)
