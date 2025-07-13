// types/agent.ts
export interface Agent {
    id: string;
    name: string;
    description: string;
    def_index: string;
    rarity: Rarity;
    collections: [];
    team: Team;
    market_hash_name: string;
    image: string;
    model_player: string;
}


export interface Rarity {
    id: string;
    name: string;
    description: string;
    color: string;
}


export interface Team {
    id: string;
    name: string;
}


export interface AgentsResponse {
    agents: Agent[];
    total: number;
    page: number;
    limit: number;
}

export interface AgentsState {
    data: Agent[];
    loading: boolean;
    error: string | null;
    total: number;
    page: number;
}