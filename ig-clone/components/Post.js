import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Post = () => {
    return (
        <View style={styles.container}>
            <PostHeader />
            <PostImage />
            <PostFooter />
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {

    },
})
