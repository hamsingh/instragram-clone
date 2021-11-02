import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import { USERS } from '../data/users'

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { USERS.map((story, index) => 
                    <View key={index} style={{alignItems: 'center'}}>
                        <Image style={styles.story} source= {{uris: story.map}} />
                        <Text>{
                            story.user.length > 11 ? story.user.slice(0,10).toLowerCase() + '...' : story.user.toLowerCase()
                        }</Text>
                    </View>    
                )}
            </ScrollView>
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        marginBottom: 13
    },
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    }
})