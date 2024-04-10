import axios from "axios";

async function buyrequest(totalp: number, totalIt: number, token: string | null) {
  try {
    const response = await axios.post(
      `http://localhost:3000/purchases`,
      {
        totalPrice: totalp,
        totalItems: totalIt
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error Adding Product To buy", error);
  }
}

export default buyrequest;
