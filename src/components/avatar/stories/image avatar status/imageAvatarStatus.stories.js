import React from "react" 
import Lady from "../../../../assets/avatar/lady.png"
import Lady2 from "../../../../assets/avatar/lady2.png"
import Man from "../../../../assets/avatar/man.png"
import Lady3 from "../../../../assets/avatar/lady3.png"
import Man2 from "../../../../assets/avatar/man2.png"
import { ImageAvatarLargeStatus, ImageAvatarMediumStatus, ImageAvatarSmallStatus } from "../Image Avatar Story/imageAvatarStatus.stories";

export default {
    title: "Avatars/Image Avatars with status",
}

export const ImageAvatarsStatus = () => (
    <div>
        <small style={styles.heading}>40</small>
        <div style={styles.container}>
            <ImageAvatarLargeStatus size="large" src={Lady} status={true} />
            <ImageAvatarLargeStatus size="large" src={Lady2} status={true} />
            <ImageAvatarLargeStatus size="large" src={Man} status={true} />
            <ImageAvatarLargeStatus size="large" src={Lady3} status={true} />
            <ImageAvatarLargeStatus size="large" src={Man2} status={true} />
        </div>

        <small style={styles.heading}>32</small>
        <div style={styles.container}>
            <ImageAvatarMediumStatus size="medium" src={Lady} status={true} />
            <ImageAvatarMediumStatus size="medium" src={Lady2} status={true} />
            <ImageAvatarMediumStatus size="medium" src={Man} status={true} />
            <ImageAvatarMediumStatus size="medium" src={Lady3} status={true} />
            <ImageAvatarMediumStatus size="medium" src={Man2} status={true} />
        </div>

        <small style={styles.heading}>24</small>
        <div style={styles.container}>
            <ImageAvatarSmallStatus size="small" src={Lady} status={true} />
            <ImageAvatarSmallStatus size="small" src={Lady2} status={true} />
            <ImageAvatarSmallStatus size="small" src={Man} status={true} />
            <ImageAvatarSmallStatus size="small" src={Lady3} status={true} />
            <ImageAvatarSmallStatus size="small" src={Man2} status={true} />
        </div>
    </div>
)


const styles = {
	container: {
		display: "flex",
		justifyContent: "space-between",
		width: "300px",
		marginTop: "16px",
		marginBottom: "35px",
	},
	heading: {
		fontSize: "10px",
		lineHeight: "16px",
	},
};