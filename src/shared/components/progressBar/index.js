import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default function progressBar(props) {
    return (
        <div>
            <Progress 
            // theme={{
            //     active: {
            //         symbol: '😀',
            //         color: '#fbc630'
            //     },
            // }}
                percent={props.value} />
        </div>
    )
}
