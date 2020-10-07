namespace CandyOnlineShopping.Models.Entity
{
    public class OrderDetail
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int CandyId { get; set; }
        public Candy Candy { get; set; }
        public int Amount { get; set; }

        public decimal Price { get; set; }

        //public Order Order { get; set; }
    }
}