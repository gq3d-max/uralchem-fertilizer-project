import Icon from "@/components/ui/icon";

const WhatsAppButton = () => {
  const phoneNumber = "79337776062";
  const message = "Здравствуйте! Интересует информация о поставках UralNitro Pro 46";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 animate-bounce-slow"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} className="md:w-8 md:h-8" />
    </a>
  );
};

export default WhatsAppButton;
