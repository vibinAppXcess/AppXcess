import { Event } from '../types';

const API_BASE_URL = 'http://localhost:8000/api';

export interface EventResponse {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'webinar' | 'conference' | 'workshop' | 'meetup';
  category: 'tech' | 'business' | 'innovation' | 'networking';
  attendees: number;
  featured: boolean;
  image: string;
  tags: string[];
  registration_link: string;
  created_at: string;
  updated_at: string;
}

export const eventService = {
  // Get all events
  async getAllEvents(): Promise<Event[]> {
    try {
      console.log('Fetching events from:', `${API_BASE_URL}/events/`);
      const response = await fetch(`${API_BASE_URL}/events/`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log('API Response:', data);
      console.log('Response type:', typeof data);
      console.log('Is array:', Array.isArray(data));
      
      // Handle pagination if the API returns paginated results
      let eventsData = data;
      if (data && data.results && Array.isArray(data.results)) {
        eventsData = data.results;
      } else if (!Array.isArray(data)) {
        console.error('Unexpected API response format:', data);
        throw new Error('API returned unexpected format. Expected array of events.');
      }
      
      return eventsData.map(this.mapEventResponse);
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  },

  // Get upcoming events
  async getUpcomingEvents(): Promise<Event[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/events/upcoming/`);
      if (!response.ok) {
        throw new Error('Failed to fetch upcoming events');
      }
      const data = await response.json();
      
      // Handle pagination
      let eventsData = data;
      if (data && data.results && Array.isArray(data.results)) {
        eventsData = data.results;
      }
      
      return eventsData.map(this.mapEventResponse);
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      return [];
    }
  },

  // Get past events
  async getPastEvents(): Promise<Event[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/events/past/`);
      if (!response.ok) {
        throw new Error('Failed to fetch past events');
      }
      const data = await response.json();
      
      // Handle pagination
      let eventsData = data;
      if (data && data.results && Array.isArray(data.results)) {
        eventsData = data.results;
      }
      
      return eventsData.map(this.mapEventResponse);
    } catch (error) {
      console.error('Error fetching past events:', error);
      return [];
    }
  },

  // Get featured events
  async getFeaturedEvents(): Promise<Event[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/events/featured/`);
      if (!response.ok) {
        throw new Error('Failed to fetch featured events');
      }
      const data = await response.json();
      
      // Handle pagination
      let eventsData = data;
      if (data && data.results && Array.isArray(data.results)) {
        eventsData = data.results;
      }
      
      return eventsData.map(this.mapEventResponse);
    } catch (error) {
      console.error('Error fetching featured events:', error);
      return [];
    }
  },

  // Get event by ID
  async getEventById(id: number): Promise<Event | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/events/${id}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch event');
      }
      const data = await response.json();
      return this.mapEventResponse(data);
    } catch (error) {
      console.error('Error fetching event:', error);
      return null;
    }
  },

  // Map API response to frontend Event type
  mapEventResponse(response: EventResponse): Event {
    return {
      id: response.id,
      title: response.title,
      description: response.description,
      date: response.date,
      time: response.time,
      location: response.location,
      type: response.type,
      category: response.category,
      attendees: response.attendees,
      featured: response.featured,
      image: response.image,
      tags: response.tags,
      registrationLink: response.registration_link,
    };
  },
};
