import { Request, Response } from "express";
import axios from "axios";
import { ICoordinatesProps, ICovidProps } from "../interface/ICovid";

export class CovidController {
  async getApi(req: Request, res: Response) {
    try {
      const response = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true');

      const statesOfBrazil: ICoordinatesProps = {
        SP: [-23.5505, -46.6333],
        RJ: [-22.9068, -43.1729],
        MG: [-18.5122, -44.5550],
        RS: [-30.0346, -51.2177],
        PR: [-25.2521, -52.0215],
        SC: [-27.5954, -48.5480],
        GO: [-16.6864, -49.2643],
        BA: [-12.9714, -38.5014],
        CE: [-3.7172, -38.5433],
        ES: [-20.3155, -40.3128],
        PE: [-8.0476, -34.8770],
        DF: [-15.8270, -47.9228],
        MT: [-15.6010, -56.0974],
        PA: [-1.4751, -48.4528],
        PB: [-7.1219, -36.7241],
        AM: [-3.4168, -65.8561],
        MS: [-20.4428, -54.6468],
        RN: [-5.7945, -35.2110],
        MA: [-2.5307, -44.3067],
        RO: [-11.5057, -63.5806],
        PI: [-5.0892, -42.8010],
        TO: [-10.1753, -48.2982],
        SE: [-10.9472, -37.0731],
        AL: [-9.5713, -36.7819],
        AP: [0.0349, -51.0663],
        RR: [2.8198, -60.6725],
        AC: [-9.0479, -70.5265],
      };

      const data: ICovidProps[] = response.data.infectedByRegion.map((state: any) => {
        return { ...state, coordinate: statesOfBrazil[state.state] }
      })

      return res.json({ infectedByRegion: data, deceasedByRegion: response.data.deceasedByRegion, deceased: response.data.deceased, infected: response.data.infected, recovered: response.data.recovered });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}