package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.Item

interface ItemService {

    fun getAll(): List<Item>
    fun create(item: Item): Item
}