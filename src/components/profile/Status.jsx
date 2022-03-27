import { Motivation } from "./Motivation";
import { AllProgress } from "./allprogress";
import { Stats } from "./index";


export  const Status = () => {
    return (<>

            <div className="status">
                <Motivation />
                <AllProgress/>
                <Stats/>
            </div>
        </>
    );
}   