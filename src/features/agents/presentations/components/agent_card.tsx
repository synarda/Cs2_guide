import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AgentCardStyle } from './agent_card_style'
import { Agent } from '../model/agent_card_model'
import AppTypography from '../../../../product/styles/app_typography'

interface AgentCardProps {
    agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
    return (
        <View style={AgentCardStyle.agentCard}>
            <Image
                source={{ uri: agent.image }}
                style={AgentCardStyle.image}
                resizeMode="contain"
            />
            <View style={AgentCardStyle.textContainer}>
                <Text
                    style={[AppTypography.bodyLarge_Bold, AgentCardStyle.nameText]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {agent.name}
                </Text>
                <Text
                    style={[AppTypography.labelMedium, AgentCardStyle.descriptionText]}
                    numberOfLines={5}
                    ellipsizeMode="tail"
                >
                    {agent.description}
                </Text>
            </View>
        </View>
    )
}



export default AgentCard