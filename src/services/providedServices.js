const BASE_URL = import.meta.env.VITE_BASE_URL;

async function getPromote() {
  try {
    const response = await fetch(`${BASE_URL}/Promote/getPromote`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch promotion data");
    }

    return data;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("An unexpected error occurred while fetching promotion data");
  }
}

async function getDistribution() {
  try {
    const response = await fetch(`${BASE_URL}/Distribution/getDistribution`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch distribution data");
    }

    return data;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("An unexpected error occurred while fetching distribution data");
  }
}

async function getClientReviews() {
  try {
    const response = await fetch('https://studio-sphere360-backend.vercel.app/api/v1/clientReview', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch client reviews");
    }

    return data;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error("An unexpected error occurred while fetching client reviews");
  }
}

export const providedServices = {
  getPromote,
  getDistribution,
  getClientReviews,
};
