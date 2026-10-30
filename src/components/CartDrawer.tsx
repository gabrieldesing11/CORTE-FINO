import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, Check, Tag, ShieldCheck, MapPin } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'pickup' | 'delivery'>('pickup');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shippingCost = shippingMethod === 'delivery' && items.length > 0 ? 8000 : 0;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');

    if (couponCode.trim().toUpperCase() === 'APERTURA10') {
      setDiscountPercent(10);
      setCouponSuccess('¡Cupón APERTURA10 aplicado! 10% de descuento.');
    } else {
      setCouponError('Cupón inválido. Prueba con APERTURA10.');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name.trim() || !customerInfo.phone.trim()) {
      return;
    }
    setOrderConfirmed(true);
  };

  const generateWhatsAppOrderLink = () => {
    const itemsSummary = items
      .map((i) => `• ${i.quantity}x ${i.product.name} ($${(i.product.price * i.quantity).toLocaleString('es-CO')})`)
      .join('\n');

    const msg = `¡Hola Corte Fino! Deseo formalizar mi pedido de productos:
${itemsSummary}
- Subtotal: $${subtotal.toLocaleString('es-CO')} COP
- Descuento: -$${discountAmount.toLocaleString('es-CO')} COP
- Método: ${shippingMethod === 'pickup' ? 'Recogida en Cra. 10 #20-30 Bogotá' : `Envío a domicilio: ${customerInfo.address}`}
- Total a pagar: $${total.toLocaleString('es-CO')} COP
- Cliente: ${customerInfo.name} (${customerInfo.phone})`;

    return `https://wa.me/573000000000?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#17191C] border-l border-[#A88958]/30 shadow-2xl flex flex-col text-[#E8E1D5]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#262A30] bg-[#1A1D20]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#A88958]" />
              <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-[#E8E1D5]">
                Bolsa de Compras · Corte Fino
              </h2>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-[#7E868D] hover:text-[#E8E1D5] hover:bg-[#262A30] rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderConfirmed ? (
              <div className="py-8 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#A88958]/20 border border-[#A88958] flex items-center justify-center text-[#A88958] mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl uppercase mb-2">
                  ¡Pedido Recibido!
                </h3>
                <p className="text-xs text-[#C8C1B4] mb-6">
                  Hemos apartado tus productos de la edición de lanzamiento.
                </p>
                <div className="p-4 bg-[#1F2226] border border-[#2D3238] rounded w-full text-left text-xs space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#7E868D]">Total:</span>
                    <span className="font-bold text-[#A88958]">${total.toLocaleString('es-CO')} COP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7E868D]">Modalidad:</span>
                    <span>{shippingMethod === 'pickup' ? 'Recoger en Sede' : 'Envío Bogotá'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7E868D]">Cliente:</span>
                    <span>{customerInfo.name}</span>
                  </div>
                </div>
                <a
                  href={generateWhatsAppOrderLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm text-center flex items-center justify-center gap-2 mb-3"
                >
                  Confirmar Despacho por WhatsApp
                </a>
                <button
                  onClick={() => {
                    onClearCart();
                    setOrderConfirmed(false);
                    setIsCheckingOut(false);
                    onClose();
                  }}
                  type="button"
                  className="text-xs text-[#7E868D] hover:text-[#E8E1D5]"
                >
                  Seguir explorando
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 flex flex-col items-center text-center">
                <ShoppingBag className="w-12 h-12 text-[#555B60] mb-4" />
                <p className="font-heading font-semibold text-lg text-[#E8E1D5] uppercase tracking-wide mb-2">
                  Tu bolsa está vacía
                </p>
                <p className="text-xs text-[#7E868D] max-w-xs mb-6">
                  Explora nuestra línea de pomadas, aceites de barba y bálsamos de lanzamiento.
                </p>
                <button
                  onClick={onClose}
                  type="button"
                  className="px-6 py-2.5 bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
                >
                  Ver Catálogo de Productos
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#262A30]">
                  <span className="text-xs font-heading font-bold uppercase text-[#A88958]">
                    Detalles de Entrega & Contacto
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#7E868D] hover:text-[#E8E1D5]"
                  >
                    Volver a la bolsa
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] text-[#7E868D] uppercase mb-1">Nombre Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1F2226] border border-[#2D3238] focus:border-[#A88958] text-xs text-[#E8E1D5] rounded-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#7E868D] uppercase mb-1">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="300 000 0000"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1F2226] border border-[#2D3238] focus:border-[#A88958] text-xs text-[#E8E1D5] rounded-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#7E868D] uppercase mb-1">Modalidad de Entrega</label>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <button
                      type="button"
                      onClick={() => setShippingMethod('pickup')}
                      className={`p-2.5 text-left rounded border text-xs ${
                        shippingMethod === 'pickup'
                          ? 'border-[#A88958] bg-[#A88958]/10 text-[#E8E1D5]'
                          : 'border-[#2D3238] bg-[#141618] text-[#7E868D]'
                      }`}
                    >
                      <span className="font-heading font-semibold block">Recoger en Sede</span>
                      <span className="text-[10px]">Gratis · Cra. 10 #20-30</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShippingMethod('delivery')}
                      className={`p-2.5 text-left rounded border text-xs ${
                        shippingMethod === 'delivery'
                          ? 'border-[#A88958] bg-[#A88958]/10 text-[#E8E1D5]'
                          : 'border-[#2D3238] bg-[#141618] text-[#7E868D]'
                      }`}
                    >
                      <span className="font-heading font-semibold block">Envío Bogotá</span>
                      <span className="text-[10px]">+$8.000 COP</span>
                    </button>
                  </div>
                </div>

                {shippingMethod === 'delivery' && (
                  <div>
                    <label className="block text-[11px] text-[#7E868D] uppercase mb-1">Dirección de Entrega en Bogotá *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dirección, Barrio, Apto"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full px-3 py-2 bg-[#1F2226] border border-[#2D3238] focus:border-[#A88958] text-xs text-[#E8E1D5] rounded-sm focus:outline-none"
                    />
                  </div>
                )}

                <div className="p-3 bg-[#141618] border border-[#262A30] rounded text-xs space-y-1">
                  <div className="flex justify-between text-[#7E868D]">
                    <span>Subtotal:</span>
                    <span className="tabular-nums">${subtotal.toLocaleString('es-CO')}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#A88958]">
                      <span>Descuento (10%):</span>
                      <span className="tabular-nums">-${discountAmount.toLocaleString('es-CO')}</span>
                    </div>
                  )}
                  {shippingCost > 0 && (
                    <div className="flex justify-between text-[#7E868D]">
                      <span>Envío local:</span>
                      <span className="tabular-nums">+${shippingCost.toLocaleString('es-CO')}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-sm text-[#E8E1D5] pt-2 border-t border-[#262A30]">
                    <span>Total a pagar:</span>
                    <span className="text-[#A88958] tabular-nums font-heading">${total.toLocaleString('es-CO')} COP</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#A88958] hover:bg-[#C4A573] text-[#17191C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
                >
                  Finalizar y Generar Orden
                </button>
              </form>
            ) : (
              /* Item List */
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-start justify-between gap-3 p-3 bg-[#1F2226] border border-[#2A2F35] rounded-md"
                  >
                    {item.product.imageUrl && (
                      <div className="w-12 h-12 rounded bg-[#141618] border border-[#2D3238] overflow-hidden shrink-0">
                        <img
                          src={item.product.imageUrl}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold text-xs text-[#E8E1D5] uppercase line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#A88958] tabular-nums mt-0.5">
                        ${item.product.price.toLocaleString('es-CO')} COP
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center bg-[#2A2F35] hover:bg-[#343A42] text-[#E8E1D5] rounded-sm text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold tabular-nums px-1 text-[#E8E1D5]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center bg-[#2A2F35] hover:bg-[#343A42] text-[#E8E1D5] rounded-sm text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      type="button"
                      className="p-1.5 text-[#7E868D] hover:text-red-400 transition-colors"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Coupon Box */}
                <form onSubmit={handleApplyCoupon} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Cupón de apertura (ej: APERTURA10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 bg-[#141618] border border-[#2D3238] focus:border-[#A88958] text-xs uppercase text-[#E8E1D5] rounded-sm focus:outline-none font-mono"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#262A30] hover:bg-[#323740] border border-[#3A4048] text-xs font-heading font-semibold uppercase text-[#E8E1D5] rounded-sm"
                    >
                      Aplicar
                    </button>
                  </div>
                  {couponSuccess && <p className="text-[11px] text-[#A88958] mt-1">{couponSuccess}</p>}
                  {couponError && <p className="text-[11px] text-red-400 mt-1">{couponError}</p>}
                </form>
              </div>
            )}
          </div>

          {/* Footer with Subtotal & Proceed Button */}
          {!orderConfirmed && items.length > 0 && !isCheckingOut && (
            <div className="p-6 border-t border-[#262A30] bg-[#1A1D20] space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#7E868D] uppercase font-medium">Subtotal Estimado:</span>
                <span className="font-heading font-bold text-xl text-[#E8E1D5] tabular-nums">
                  ${subtotal.toLocaleString('es-CO')} <span className="text-xs text-[#7E868D]">COP</span>
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between items-center text-xs text-[#A88958]">
                  <span>Descuento de Apertura (10%):</span>
                  <span className="tabular-nums">-${discountAmount.toLocaleString('es-CO')} COP</span>
                </div>
              )}

              <button
                onClick={() => setIsCheckingOut(true)}
                type="button"
                className="w-full py-3.5 bg-[#A88958] hover:bg-[#C4A573] active:bg-[#8B6E3F] text-[#17191C] font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#A88958]/20"
              >
                <span>Continuar con la Compra</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
