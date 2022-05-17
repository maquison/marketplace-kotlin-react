package com.psc.marketplacebackend.models

import javax.persistence.Column
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.validation.constraints.NotBlank

data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @get: NotBlank
    @Column
    val username: String = "",

    @get: NotBlank
    @Column
    val password: String = "",

    @get: NotBlank
    @Column
    val firstName: String = "",

    @get: NotBlank
    @Column
    val lastName: String = "",
)
