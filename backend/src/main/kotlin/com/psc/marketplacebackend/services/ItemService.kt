package com.psc.marketplacebackend.services

import com.psc.marketplacebackend.models.Item

interface ItemService {

    fun getAll(): Iterable<Item>
    fun create(item: Item): Item

}