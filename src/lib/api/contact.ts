interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<ApiResponse> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    return {
      success: false,
      message: 'Failed to send message'
    };
  }
};