import "./UnderConstruction.css";

import goose from "../../assets/UnderConstruction/Construction-Goose.png";
import tape from "../../assets/UnderConstruction/Construction-Tape.png";
import coming from "../../assets/UnderConstruction/COMING-SOON.png";
import stay from "../../assets/UnderConstruction/STAY-TUNED!.png";
import uctext from "../../assets/UnderConstruction/text.png";
import newGoose from "../../assets/UnderConstruction/NewGoose.png";

export default function UnderConstruction() {
  return (
    <section className="uc-container">
      <div className="uc-stack">
        
        {/* Bottom Layer - Goose */}
        <img src={newGoose} alt="Goose" className="uc-goose" />
        
        {/* Next Layer - Construction Tape */}
        <img src={tape} alt="Construction Tape" className="uc-tape" />

        {/* Next Layer - Text 1 */}
        <img src={uctext} alt="Coming Soon" className="uc-text" />

      </div>
    </section>
  );
}
