from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from .models import BlogPost, FAQ, Event

# Branding for Django admin
admin.site.site_header = "AppXcess Administration"
admin.site.site_title = "AppXcess Admin"
admin.site.index_title = "Content Management System"

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date', 'featured', 'created_at', 'action_buttons')
    list_filter = ('featured', 'date', 'author', 'tags')
    search_fields = ('title', 'description', 'author', 'content')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'description', 'content')
        }),
        ('Author & Date', {
            'fields': ('author', 'date', 'read_time')
        }),
        ('Media & Tags', {
            'fields': ('image', 'gallery', 'tags')
        }),
        ('Settings', {
            'fields': ('featured',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def action_buttons(self, obj: BlogPost):
        change_url = reverse('admin:blog_blogpost_change', args=[obj.pk])
        delete_url = reverse('admin:blog_blogpost_delete', args=[obj.pk])
        return format_html(
            '<a class="button" href="{}" style="margin-right:6px;">Edit</a>'
            '<a class="button" href="{}" style="background:#dc2626;color:#fff;">Delete</a>',
            change_url, delete_url
        )
    action_buttons.short_description = 'Actions'


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'category', 'sort_order', 'is_active', 'created_at', 'action_buttons')
    list_filter = ('is_active', 'category')
    search_fields = ('question', 'answer', 'category')
    ordering = ('sort_order',)
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        (None, {
            'fields': ('question', 'answer', 'category')
        }),
        ('Display', {
            'fields': ('sort_order', 'is_active')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def action_buttons(self, obj: FAQ):
        change_url = reverse('admin:blog_faq_change', args=[obj.pk])
        delete_url = reverse('admin:blog_faq_delete', args=[obj.pk])
        return format_html(
            '<a class="button" href="{}" style="margin-right:6px;">Edit</a>'
            '<a class="button" href="{}" style="background:#dc2626;color:#fff;">Delete</a>',
            change_url, delete_url
        )
    action_buttons.short_description = 'Actions'


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'category', 'date', 'location', 'featured', 'attendees', 'created_at', 'action_buttons')
    list_filter = ('featured', 'type', 'category', 'date')
    search_fields = ('title', 'description', 'location')
    ordering = ('-date',)
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'date', 'time', 'location')
        }),
        ('Event Details', {
            'fields': ('type', 'category', 'attendees', 'featured')
        }),
        ('Media', {
            'fields': ('image',)
        }),
        ('Registration', {
            'fields': ('registration_link',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

    def action_buttons(self, obj: Event):
        change_url = reverse('admin:blog_event_change', args=[obj.pk])
        delete_url = reverse('admin:blog_event_delete', args=[obj.pk])
        return format_html(
            '<a class="button" href="{}" style="margin-right:6px;">Edit</a>'
            '<a class="button" href="{}" style="background:#dc2626;color:#fff;">Delete</a>',
            change_url, delete_url
        )
    action_buttons.short_description = 'Actions'
