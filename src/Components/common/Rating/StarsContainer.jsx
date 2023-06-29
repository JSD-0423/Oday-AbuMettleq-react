import IonIcon from "../IonIcon/IonIcon";
import "./StarsContainer.Styles.css"

export function StarsContainer({rating}) {
    return (
        <div className="starsContainer">
            <div
                className="clipped-stars"
                style={{
                    clipPath: `polygon(0 0, ${(rating * 20)}% 0, ${(rating * 20)}% 95%, 0% 95%)`,
                }}
            >
                <IonIcon iconName={"star"}></IonIcon>
                <IonIcon iconName={"star"}></IonIcon>
                <IonIcon iconName={"star"}></IonIcon>
                <IonIcon iconName={"star"}></IonIcon>
                <IonIcon iconName={"star"}></IonIcon>
            </div>

            <div className="fixed-stars">
                <IonIcon iconName={"star-outline"}></IonIcon>
                <IonIcon iconName={"star-outline"}></IonIcon>
                <IonIcon iconName={"star-outline"}></IonIcon>
                <IonIcon iconName={"star-outline"}></IonIcon>
                <IonIcon iconName={"star-outline"}></IonIcon>
            </div>
        </div>)

}