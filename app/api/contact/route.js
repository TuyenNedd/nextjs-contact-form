export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const formData = await request.json();
    
    // Validate the form data
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ message: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ message: 'Invalid email format' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    
    // In a real application, you would:
    // 1. Send an email notification using a service like SendGrid or Nodemailer
    // 2. Store the submission in a database
    // 3. Implement spam prevention like CAPTCHA or rate limiting
    
    console.log('Form submission received:', formData);
    
    // For demo purposes, we're just logging the data and returning success
    // In a production app, you'd implement actual email sending functionality
    
    return new Response(
      JSON.stringify({ 
        message: 'Form submission successful',
        data: formData 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}