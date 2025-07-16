import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AgentCardStyle } from './agent_card_style'
import { Agent } from '../../model/agent_card_model'
import AppTypography from '../../../../../product/styles/app_typography'
import appColors from '../../../../../product/constants/colors'
import { TeamTypeId } from '../../../../../product/enums/agent_enums'



interface AgentCardProps {
    agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
    return (
        <View style={AgentCardStyle.agentCard}>
            <View>
                <Image
                    source={{ uri: agent.image }}
                    style={AgentCardStyle.image}
                    resizeMode="contain"
                />
                <View
                    style={[
                        AgentCardStyle.teamTag,
                        {
                            borderColor: agent.team.id === TeamTypeId.Terrorist ? appColors.primary : appColors.tertiary,
                            borderWidth: 1
                        }
                    ]}
                >
                    <Text style={[AppTypography.bodySmall, { textAlign: "center", color: agent.team.id === TeamTypeId.Terrorist ? appColors.primary : appColors.tertiary }]}>
                        {agent.team.name}
                    </Text>
                </View>

            </View>
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
        </View >
    )
}



export default AgentCard