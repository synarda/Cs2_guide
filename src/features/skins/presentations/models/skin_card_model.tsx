// model/skin_card_model.ts

export interface Skin {
    id: string;
    name: string;
    description: string;
    weapon: Weapon;
    category: Category;
    pattern: Pattern;
    min_float: number;
    max_float: number;
    rarity: Rarity;
    stattrak: boolean;
    souvenir: boolean;
    paint_index: string;
    wears: Wear[];
    collections: Collection[]; // Boş olabiliyor
    crates: Crate[];
    team: Team;
    legacy_model: boolean;
    image: string;
}

export interface Weapon {
    id: string;
    weapon_id: number;
    name: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Pattern {
    id: string;
    name: string;
}

export interface Rarity {
    id: string;
    name: string;
    color: string;
}

export interface Wear {
    id: string;
    name: string;
}

export interface Collection {
    id: string;
    name: string;
    image: string;
}

export interface Crate {
    id: string;
    name: string;
    image: string;
}

export interface Team {
    id: string;
    name: string;
}

export interface SkinsState {
    data: Skin[];
    loading: boolean;
    error: string | null;
    total: number;
    page: number;
    searchTerm: string;
}

