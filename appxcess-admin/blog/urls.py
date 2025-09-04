from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet, FAQViewSet, EventViewSet

router = DefaultRouter()
router.register(r'posts', BlogPostViewSet)
router.register(r'faqs', FAQViewSet)
router.register(r'events', EventViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
