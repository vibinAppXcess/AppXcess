// Test script to verify Django API connection
const API_BASE_URL = 'http://localhost:8000/api';

async function testAPI() {
  try {
    console.log('Testing Django API connection...');
    
    // Test recent posts
    const recentResponse = await fetch(`${API_BASE_URL}/posts/recent/`);
    const recentPosts = await recentResponse.json();
    console.log('Recent posts:', recentPosts);
    
    // Test all posts
    const allResponse = await fetch(`${API_BASE_URL}/posts/`);
    const allPosts = await allResponse.json();
    console.log('All posts:', allPosts);
    
    // Test specific post
    if (recentPosts.length > 0) {
      const postResponse = await fetch(`${API_BASE_URL}/posts/detail/${recentPosts[0].slug}/`);
      const post = await postResponse.json();
      console.log('Specific post:', post);
    }
    
    console.log('✅ API connection successful!');
  } catch (error) {
    console.error('❌ API connection failed:', error);
  }
}

testAPI();
