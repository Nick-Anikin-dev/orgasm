import React from 'react';
import Svg, { Path } from "react-native-svg";

const NotificationsIcon = () => {
    return (
        <Svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V1.75H6.44258C4.21751 1.75 2.37591 3.48001 2.23702 5.70074L2.01601 9.2342C1.93175 10.5814 1.47946 11.8797 0.708404 12.9876C0.0117219 13.9886 0.631942 15.3712 1.84287 15.5165L5.25 15.9254V17C5.25 18.5188 6.48122 19.75 8 19.75C9.51878 19.75 10.75 18.5188 10.75 17V15.9254L14.1571 15.5165C15.3681 15.3712 15.9883 13.9886 15.2916 12.9876C14.5205 11.8797 14.0682 10.5814 13.984 9.2342L13.763 5.70074C13.6241 3.48001 11.7825 1.75 9.55741 1.75H9V1ZM6.44258 3.25C5.00958 3.25 3.82354 4.36417 3.73409 5.79438L3.51309 9.32784C3.41169 10.949 2.86744 12.5112 1.93959 13.8444C1.88924 13.9168 1.93406 14.0167 2.02159 14.0272L5.75925 14.4757C7.24774 14.6543 8.75225 14.6543 10.2407 14.4757L13.9784 14.0272C14.0659 14.0167 14.1108 13.9168 14.0604 13.8444C13.1326 12.5112 12.5883 10.949 12.4869 9.32784L12.2659 5.79438C12.1764 4.36417 10.9904 3.25 9.55741 3.25H6.44258ZM8 18.25C7.30964 18.25 6.75 17.6904 6.75 17V16.25H9.25V17C9.25 17.6904 8.69036 18.25 8 18.25Z"
                fill="#ffffff"
            />
        </Svg>
    );
};

export default NotificationsIcon;
