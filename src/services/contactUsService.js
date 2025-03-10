const BASE_URL = import.meta.env.VITE_BASE_URL;

async function createInquiry(inquiryData) {
  try {
    // Validate required fields
    if (!inquiryData.name || !inquiryData.email || !inquiryData.message) {
      throw new Error('Name, email, and message are required');
    }

    const response = await fetch(`${BASE_URL}/user/createInquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inquiryData.name,
        email: inquiryData.email,
        phone: inquiryData.phone,
        lookingFor: inquiryData.lookingFor,
        message: inquiryData.message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit inquiry');
    }

    return {
      status: response.status,
      success: true,
      data: data,
      message: 'Inquiry submitted successfully',
    };
  } catch (error) {
    const errorResponse = {
      status: error instanceof Response ? error.status : 500,
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred while submitting inquiry',
      data: null,
    };
    throw errorResponse;
  }
}

export const contactUsService = {
  createInquiry,
};