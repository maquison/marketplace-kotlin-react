package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.Item

interface ItemService {

    fun findAll(): List<Item>
    fun create(item: Item): Item
}