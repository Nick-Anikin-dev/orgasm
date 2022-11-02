import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const DashboardIcon: FC<Icon> = ({isActive}) => {
    return (
        <Svg width="23" height="16" viewBox="0 0 23 16" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.23967 0.875939C7.18246 0.534905 6.8995 0.27719 6.55462 0.252008C6.20974 0.226826 5.89234 0.440704 5.7862 0.76981L3.69627 7.25002H1C0.585786 7.25002 0.25 7.5858 0.25 8.00002C0.25 8.41423 0.585786 8.75002 1 8.75002H4.24242C4.56795 8.75002 4.8563 8.54003 4.95622 8.23022L6.26937 4.15859L8.10882 15.1241C8.16679 15.4697 8.45634 15.7291 8.8062 15.7488C9.15606 15.7686 9.47297 15.5434 9.56948 15.2066L11.999 6.72659L13.2789 11.2061C13.3613 11.4947 13.608 11.7064 13.9059 11.7441C14.2037 11.7818 14.4954 11.6382 14.6471 11.3791L16.1874 8.75002H17.3535C17.68 9.90427 18.7412 10.75 20 10.75C21.5188 10.75 22.75 9.5188 22.75 8.00002C22.75 6.48123 21.5188 5.25002 20 5.25002C18.7412 5.25002 17.68 6.09576 17.3535 7.25002H15.7576C15.4913 7.25002 15.245 7.39117 15.1105 7.62089L14.2394 9.10775L12.7211 3.79398C12.6292 3.4721 12.335 3.25014 12.0003 3.25002C11.6655 3.24989 11.3712 3.47164 11.279 3.79345L9.04002 11.6084L7.23967 0.875939ZM18.75 8.00002C18.75 7.30966 19.3096 6.75002 20 6.75002C20.6904 6.75002 21.25 7.30966 21.25 8.00002C21.25 8.69037 20.6904 9.25002 20 9.25002C19.3096 9.25002 18.75 8.69037 18.75 8.00002Z"
                fill={isActive ? "#F49E72" : "#ffffff"}/>
        </Svg>
    );
}