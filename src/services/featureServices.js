const BASE_URL = import.meta.env.VITE_BASE_URL;

async function getCreateMusic() {
  try {
    const response = await fetch(`${BASE_URL}/CreateMusic/getCreateMusic`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log("data is", data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch CreateMusic data');
    }
  

    return {
      status: response.status,
      success: true,
      data: data.data, // Assuming the response data is nested under "data" based on your example
      message: data.message || 'Data retrieved successfully',
    };
  } catch (error) {
    const errorResponse = {
      status: error instanceof Response ? error.status : 500,
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred while fetching CreateMusic data',
      data: null,
    };
    throw errorResponse;
  }
}

export const createMusicService = {
  getCreateMusic,
};