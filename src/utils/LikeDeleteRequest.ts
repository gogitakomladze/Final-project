
import axios from "axios";

async function LikeDeleteRequest({
  LikeProductId,
  token,
}: {
  LikeProductId: string;
  token: string | null;
}) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/${LikeProductId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("Couldn't Remove The Product", error);
  }
}

export default LikeDeleteRequest;
