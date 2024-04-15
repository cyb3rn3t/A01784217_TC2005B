using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pongGoal : MonoBehaviour
{

    [SerializeField] string side;

    // Variable to reference another scipt
    pongManager manager;

    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<pongManager>();
    }

    // Detect when the ball goes out of bounds.
    private void OnCollisionEnter2D(Collision2D other)
    {
        manager.Score(side);
        Destroy(other.gameObject);

    }

}
