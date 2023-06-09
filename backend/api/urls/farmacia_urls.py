from django.urls import path
from api.views import farmacia_views as views

urlpatterns = [
    path('laboratorios/', views.LaboratoriosListCreateAPIViw.as_view()),
    path('laboratorios/<int:pk>/', views.LaboratoriosDetailAPIViw.as_view()),
    path('laboratorios/update/<int:pk>/', views.LaboratoriosUpdateAPIViw.as_view()),
    path('laboratorios/delete/<int:pk>/', views.LaboratoriosDeleteAPIViw.as_view()),
    path('productofarmacia/', views.ProductoFarmaciaListCreateAPIViw.as_view()),
    path('productofarmacia/<int:pk>/', views.ProductoFarmaciaDetailAPIViw.as_view()),
    path('productofarmacia/update/<int:pk>/', views.ProductoFarmaciaUpdateAPIViw.as_view()),
    path('productofarmacia/delete/<int:pk>/', views.ProductoFarmaciaDeleteAPIViw.as_view()),
    path('comprobanteventa/', views.ComprobanteVentaListCreateAPIViw.as_view()),
    path('comprobanteventa/<int:pk>/', views.ComprobanteVentasDetailAPIViw.as_view()),
    path('comprobanteventa/update/<int:pk>/', views.ComprobanteVentaUpdateAPIViw.as_view()),
    path('comprobanteventa/delete/<int:pk>/', views.ComprobanteVentaDeleteAPIViw.as_view()),
    path('recetas/', views.RecetasListCreateAPIViw.as_view()),
    path('recetas/<int:pk>/', views.RecetasDetailAPIViw.as_view()),
    path('recetas/update/<int:pk>/', views.RecetasUpdateAPIViw.as_view()),
    path('recetas/delete/<int:pk>/', views.RecetasDeleteAPIViw.as_view()),
    path('productovendido/', views.ProductoVendidoListCreateAPIViw.as_view()),
    path('productovendido/<int:pk>/', views.ProductoVendidoDetailAPIViw.as_view()),
    path('productovendido/update/<int:pk>/', views.ProductoVendidoUpdateAPIViw.as_view()),
    path('productovendido/delete/<int:pk>/', views.ProductoVendidoDeleteAPIViw.as_view()),
    path('cargaproducto/', views.CargaProductoListCreateAPIViw.as_view()),
    path('cargaproducto/<int:pk>/', views.CargaProductoDetailAPIViw.as_view()),
    path('cargaproducto/update/<int:pk>/', views.CargaProductoUpdateAPIViw.as_view()),
    path('cargaproducto/delete/<int:pk>/', views.CargaProductoDeleteAPIViw.as_view()),
]