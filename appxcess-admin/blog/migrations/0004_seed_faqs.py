from django.db import migrations


FAQ_ITEMS = [
    (
        "What services does AppXcess offer?",
        "AppXcess specializes in IT services and engineering including mobile application development, backend development, UI/UX design, DevOps solutions, quality assurance and testing, and support and maintenance.",
        "General Questions",
        1,
    ),
    (
        "How can I get started with AppXcess?",
        "Getting started with AppXcess is simple. Contact us through our website or email, and our team will schedule a consultation to understand your project requirements, discuss timelines, and provide a customized solution tailored to your needs.",
        "Client Services",
        2,
    ),
    (
        "Does AppXcess provide post-launch support?",
        "Yes, we provide comprehensive post-launch support including maintenance, updates, bug fixes, and ongoing optimization to ensure your application continues to perform at its best.",
        "Technical Support",
        3,
    ),
    (
        "Can AppXcess handle enterprise-level projects?",
        "Absolutely. We have extensive experience handling enterprise-level projects with complex requirements, large-scale deployments, and mission-critical applications. Our team is equipped to manage projects of any size.",
        "General Questions",
        4,
    ),
    (
        "How do I join the AppXcess team?",
        "We're always looking for talented individuals to join our team. Visit our Careers page to view current openings, or send your resume to our HR team. We value innovation, collaboration, and continuous learning.",
        "Team & Careers",
        5,
    ),
    (
        "Does AppXcess work with international clients?",
        "Yes, we work with clients globally. Our team is distributed across multiple time zones, allowing us to provide 24/7 support and collaborate effectively with international clients.",
        "Global Reach",
        6,
    ),
    (
        "What technologies does AppXcess use?",
        "We use a wide range of cutting-edge technologies including React, Node.js, Python, Java, AWS, Azure, Docker, Kubernetes, and many more. We stay updated with the latest tech trends to deliver the best solutions.",
        "Technical Support",
        7,
    ),
]


def seed_faqs(apps, schema_editor):
    FAQ = apps.get_model('blog', 'FAQ')
    for question, answer, category, sort_order in FAQ_ITEMS:
        FAQ.objects.get_or_create(
            question=question,
            defaults={
                'answer': answer,
                'category': category,
                'sort_order': sort_order,
                'is_active': True,
            }
        )


def unseed_faqs(apps, schema_editor):
    FAQ = apps.get_model('blog', 'FAQ')
    for question, *_ in FAQ_ITEMS:
        FAQ.objects.filter(question=question).delete()


class Migration(migrations.Migration):
    dependencies = [
        ('blog', '0003_faq'),
    ]

    operations = [
        migrations.RunPython(seed_faqs, unseed_faqs),
    ]


