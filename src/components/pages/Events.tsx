import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter, Search, Star, TrendingUp, Video, Globe, Building2, Code, Brain, Cloud } from 'lucide-react';
import { Button } from '../ui';
import { eventService } from '../../services/eventService';

interface Event {
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
  registrationLink: string;
}

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const fetchedEvents = await eventService.getAllEvents();
        setEvents(fetchedEvents);
        setError(null);
      } catch (err) {
        setError('Failed to fetch events. Please try again later.');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    let filtered = events.filter(event => {
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesType = selectedType === 'all' || event.type === selectedType;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesType && matchesSearch;
    });

    // Filter by upcoming/past dates
    const today = new Date();
    if (activeTab === 'upcoming') {
      filtered = filtered.filter(event => new Date(event.date) >= today);
    } else {
      filtered = filtered.filter(event => new Date(event.date) < today);
    }

    setFilteredEvents(filtered);
  }, [selectedCategory, selectedType, searchQuery, activeTab, events]);

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'webinar': return <Video className="w-5 h-5" />;
      case 'conference': return <Globe className="w-5 h-5" />;
      case 'workshop': return <Code className="w-5 h-5" />;
      case 'meetup': return <Users className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'webinar': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'conference': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'workshop': return 'bg-green-100 text-green-700 border-green-200';
      case 'meetup': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tech': return <Code className="w-4 h-4" />;
      case 'business': return <Building2 className="w-4 h-4" />;
      case 'innovation': return <Brain className="w-4 h-4" />;
      case 'networking': return <Users className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-12 h-12 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Events</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button
            variant="primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Discover & Connect at <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Our Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join industry leaders, innovators, and professionals at our curated events. 
              From tech workshops to networking mixers, expand your knowledge and connections.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'upcoming'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'past'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events, topics, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Categories</option>
                <option value="tech">Technology</option>
                <option value="business">Business</option>
                <option value="innovation">Innovation</option>
                <option value="networking">Networking</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Types</option>
                <option value="webinar">Webinar</option>
                <option value="conference">Conference</option>
                <option value="workshop">Workshop</option>
                <option value="meetup">Meetup</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new events.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                    event.featured ? 'ring-2 ring-teal-500' : ''
                  }`}
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Event Status Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {new Date(event.date) < new Date() ? (
                        <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                          Past Event
                        </div>
                      ) : event.featured ? (
                        <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                          Featured
                        </div>
                      ) : null}
                    </div>
                    
                    {/* Event Type Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border shadow-lg ${getEventTypeColor(event.type)}`}>
                        {getEventTypeIcon(event.type)}
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-700 border border-gray-200 shadow-lg">
                        {getCategoryIcon(event.category)}
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </div>
                    </div>
                  </div>

                  {/* Event Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Title and Description */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-teal-500 flex-shrink-0" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {event.tags && event.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-teal-100 hover:text-teal-700 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA Button - Positioned at bottom */}
                    <div className="mt-auto">
                      {new Date(event.date) >= new Date() ? (
                        <Button
                          variant="primary"
                          rightIcon={<ArrowRight className="w-4 h-4" />}
                          className="w-full"
                          onClick={() => window.open(event.registrationLink, '_blank')}
                        >
                          Register Now
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full cursor-not-allowed opacity-50"
                          disabled
                        >
                          Event Ended
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Want to Host an Event?
            </h2>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Partner with us to create impactful events that bring together industry leaders, 
              innovators, and professionals in your field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white text-teal-600 border-white hover:bg-teal-50 hover:border-teal-50"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Partner With Us
              </Button>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-teal-600"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Contact Events Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
