interface CircleUserProps {
    color: string
}

export default function CircleUser({ color }: CircleUserProps) {
	return (
        <svg
            aria-hidden='true'
            focusable='false'
            role='img'
            viewBox='0 0 512 512'
        >
            <path
                fill='none'
                stroke={color}
                strokeWidth='25'
                d='m 109.9587,449.35918 c 15.85489,-35.56042 37.42928,-98.92204 82.3564,-101.24728 10.78062,0.21628 108.74732,0.73126 129.13542,0.27945 46.91623,5.96176 64.58717,57.22517 79.89474,94.56513 -78.49519,80.95802 -213.79796,63.79343 -291.38656,6.4027 z'
            />
            <ellipse
                fill='none'
                stroke={color}
                strokeWidth='25'
                id='path369'
                cx='255.45941'
                cy='199.05713'
                rx='87.294609'
                ry='86.34156'
            />
            <ellipse
                fill='none'
                stroke={color}
                strokeWidth='25'
                id='ellipse1049'
                cx='256.00845'
                cy='256.06555'
                rx='242.74377'
                ry='242.79166'
            />
		</svg>
	)
}
