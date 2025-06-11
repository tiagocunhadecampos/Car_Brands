import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { tw } from 'nativewind';

const LoadingSpinner: React.FC = () => {
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default LoadingSpinner;