from django.urls import path, re_path
from basic_app import views

app_name = 'basic_app'

urlpatterns = [
    path('',views.SchoolListView.as_view(), name='list'),
    # re_path(r'^(?P<pk>\d+)/$',views.SchoolDetailView.as_view(),name='detail'),
    path('create/',views.SchoolCreateView.as_view(), name='create'),
    path('update/<pk>/',views.SchoolUpdateView.as_view(), name='update'),
    path('delete/<pk>/',views.SchoolDeleteView.as_view(), name='delete'),
    path('<pk>/',views.SchoolDetailView.as_view(), name='detail'),

]
